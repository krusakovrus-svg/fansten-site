'use client';

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type FormEvent,
  type ReactNode
} from 'react';

import {
  WAITLIST_CONTACT_TYPE_LABELS,
  validateWaitlistPayload,
  type WaitlistContactType,
  type WaitlistField,
  type WaitlistLocale,
  type WaitlistValidationIssue
} from '@/lib/waitlist';

type WaitlistTriggerContextValue = {
  openWaitlist: () => void;
};

type WaitlistModalProviderProps = {
  locale: WaitlistLocale;
  sourcePage: string;
  children: ReactNode;
};

type WaitlistFormState = {
  contactType: WaitlistContactType | '';
  name: string;
  phone: string;
  email: string;
};

type WaitlistModalCopy = {
  title: string;
  body: string;
  contactTypeLabel: string;
  nameLabel: string;
  phoneLabel: string;
  emailLabel: string;
  cancel: string;
  submit: string;
  submitting: string;
  successTitle: string;
  successBody: string;
  close: string;
  errors: Record<WaitlistValidationIssue, string>;
  generalError: string;
};

const waitlistModalCopy: Record<WaitlistLocale, WaitlistModalCopy> = {
  en: {
    title: 'Join the Fansten waitlist',
    body: 'Leave your details and we will contact you as Fansten gets closer to launch.',
    contactTypeLabel: 'Contact type',
    nameLabel: 'Name',
    phoneLabel: 'Phone',
    emailLabel: 'Email',
    cancel: 'Cancel',
    submit: 'Join the waitlist',
    submitting: 'Saving...',
    successTitle: "You're on the waitlist",
    successBody: 'Thanks. We saved your details and will keep you updated on the Fansten launch.',
    close: 'Close',
    errors: {
      required: 'Please fill in this field.',
      invalid_email: 'Enter a valid email address.',
      invalid_phone: 'Enter a valid phone number.',
      invalid_contact_type: 'Choose who you are.'
    },
    generalError: 'Something went wrong. Please try again in a moment.'
  },
  ru: {
    title: 'Вступить в лист ожидания Fansten',
    body: 'Оставьте контакты, и мы свяжемся с вами, когда Fansten будет ближе к запуску.',
    contactTypeLabel: 'Тип контакта',
    nameLabel: 'Имя',
    phoneLabel: 'Телефон',
    emailLabel: 'Email',
    cancel: 'Отмена',
    submit: 'Вступить в лист ожидания',
    submitting: 'Сохраняем...',
    successTitle: 'Вы в листе ожидания',
    successBody: 'Спасибо. Мы сохранили ваши данные и сообщим о запуске Fansten.',
    close: 'Закрыть',
    errors: {
      required: 'Заполните это поле.',
      invalid_email: 'Укажите корректный email.',
      invalid_phone: 'Укажите корректный номер телефона.',
      invalid_contact_type: 'Выберите тип контакта.'
    },
    generalError: 'Не удалось отправить форму. Попробуйте ещё раз чуть позже.'
  }
};

const WaitlistTriggerContext = createContext<WaitlistTriggerContextValue | null>(null);

function createInitialFormState(): WaitlistFormState {
  return {
    contactType: 'fan',
    name: '',
    phone: '',
    email: ''
  };
}

export function WaitlistModalProvider({
  locale,
  sourcePage,
  children
}: WaitlistModalProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formState, setFormState] = useState<WaitlistFormState>(createInitialFormState);
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<WaitlistField, WaitlistValidationIssue>>>(
    {}
  );
  const [formError, setFormError] = useState('');
  const copy = waitlistModalCopy[locale];
  const contactTypeOptions = WAITLIST_CONTACT_TYPE_LABELS[locale];

  const resetForm = () => {
    setFormState(createInitialFormState());
    setFieldErrors({});
    setFormError('');
    setIsSuccess(false);
    setIsSubmitting(false);
  };

  const openWaitlist = () => {
    resetForm();
    setIsOpen(true);
  };

  const closeWaitlist = () => {
    setIsOpen(false);
    setIsSubmitting(false);
  };

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && !isSubmitting) {
        closeWaitlist();
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, isSubmitting]);

  const contextValue = useMemo(
    () => ({
      openWaitlist
    }),
    []
  );

  const updateField = <T extends keyof WaitlistFormState>(field: T, value: WaitlistFormState[T]) => {
    setFormState((current) => ({
      ...current,
      [field]: value
    }));

    setFieldErrors((current) => {
      if (!(field in current)) {
        return current;
      }

      const next = { ...current };
      delete next[field as WaitlistField];
      return next;
    });

    if (formError) {
      setFormError('');
    }
  };

  const resolveFieldError = (field: WaitlistField) => {
    const issue = fieldErrors[field];
    return issue ? copy.errors[issue] : null;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { fieldErrors: nextFieldErrors } = validateWaitlistPayload({
      ...formState,
      locale,
      sourcePage
    });

    if (Object.keys(nextFieldErrors).length > 0) {
      setFieldErrors(nextFieldErrors);
      return;
    }

    setIsSubmitting(true);
    setFormError('');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formState,
          locale,
          sourcePage
        })
      });

      const data = (await response.json().catch(() => null)) as
        | { error?: string; fieldErrors?: Partial<Record<WaitlistField, WaitlistValidationIssue>> }
        | null;

      if (!response.ok) {
        if (data?.fieldErrors && Object.keys(data.fieldErrors).length > 0) {
          setFieldErrors(data.fieldErrors);
        }

        setFormError(data?.error || copy.generalError);
        setIsSubmitting(false);
        return;
      }

      setIsSuccess(true);
      setIsSubmitting(false);
    } catch {
      setFormError(copy.generalError);
      setIsSubmitting(false);
    }
  };

  return (
    <WaitlistTriggerContext.Provider value={contextValue}>
      {children}

      {isOpen ? (
        <div
          className="waitlist-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="waitlist-modal-title"
          onClick={() => {
            if (!isSubmitting) {
              closeWaitlist();
            }
          }}
        >
          <div className="waitlist-modal__backdrop" aria-hidden="true" />

          <div
            className="waitlist-modal__panel"
            onClick={(event) => {
              event.stopPropagation();
            }}
          >
            <button
              type="button"
              className="waitlist-modal__close"
              onClick={closeWaitlist}
              aria-label={copy.close}
              disabled={isSubmitting}
            >
              ×
            </button>

            {isSuccess ? (
              <div className="waitlist-modal__success">
                <span className="waitlist-modal__success-mark" aria-hidden="true">
                  ✓
                </span>
                <h2 id="waitlist-modal-title">{copy.successTitle}</h2>
                <p>{copy.successBody}</p>

                <button type="button" className="button button--primary" onClick={closeWaitlist}>
                  {copy.close}
                </button>
              </div>
            ) : (
              <>
                <div className="waitlist-modal__header">
                  <span className="section__label">{copy.submit}</span>
                  <h2 id="waitlist-modal-title">{copy.title}</h2>
                  <p>{copy.body}</p>
                </div>

                <form className="waitlist-form" onSubmit={handleSubmit} noValidate>
                  <div className="waitlist-form__group">
                    <span className="waitlist-form__label">{copy.contactTypeLabel}</span>

                    <div className="waitlist-form__type-grid">
                      {(Object.keys(contactTypeOptions) as WaitlistContactType[]).map((type) => (
                        <button
                          key={type}
                          type="button"
                          className={
                            type === formState.contactType
                              ? 'waitlist-form__type waitlist-form__type--active'
                              : 'waitlist-form__type'
                          }
                          onClick={() => updateField('contactType', type)}
                        >
                          {contactTypeOptions[type]}
                        </button>
                      ))}
                    </div>

                    {resolveFieldError('contactType') ? (
                      <p className="waitlist-form__error">{resolveFieldError('contactType')}</p>
                    ) : null}
                  </div>

                  <label className="waitlist-form__field">
                    <span className="waitlist-form__label">{copy.nameLabel}</span>
                    <input
                      className="waitlist-form__input"
                      autoComplete="name"
                      value={formState.name}
                      onChange={(event) => updateField('name', event.target.value)}
                    />
                    {resolveFieldError('name') ? (
                      <p className="waitlist-form__error">{resolveFieldError('name')}</p>
                    ) : null}
                  </label>

                  <label className="waitlist-form__field">
                    <span className="waitlist-form__label">{copy.phoneLabel}</span>
                    <input
                      className="waitlist-form__input"
                      autoComplete="tel"
                      inputMode="tel"
                      value={formState.phone}
                      onChange={(event) => updateField('phone', event.target.value)}
                    />
                    {resolveFieldError('phone') ? (
                      <p className="waitlist-form__error">{resolveFieldError('phone')}</p>
                    ) : null}
                  </label>

                  <label className="waitlist-form__field">
                    <span className="waitlist-form__label">{copy.emailLabel}</span>
                    <input
                      className="waitlist-form__input"
                      autoComplete="email"
                      inputMode="email"
                      value={formState.email}
                      onChange={(event) => updateField('email', event.target.value)}
                    />
                    {resolveFieldError('email') ? (
                      <p className="waitlist-form__error">{resolveFieldError('email')}</p>
                    ) : null}
                  </label>

                  {formError ? <p className="waitlist-form__error waitlist-form__error--block">{formError}</p> : null}

                  <div className="waitlist-form__actions">
                    <button type="button" className="button button--secondary" onClick={closeWaitlist}>
                      {copy.cancel}
                    </button>
                    <button type="submit" className="button button--primary" disabled={isSubmitting}>
                      {isSubmitting ? copy.submitting : copy.submit}
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      ) : null}
    </WaitlistTriggerContext.Provider>
  );
}

type WaitlistTriggerButtonProps = {
  label: string;
  className: string;
};

export function WaitlistTriggerButton({ label, className }: WaitlistTriggerButtonProps) {
  const context = useContext(WaitlistTriggerContext);

  if (!context) {
    throw new Error('WaitlistTriggerButton must be used inside WaitlistModalProvider.');
  }

  return (
    <button type="button" className={className} onClick={context.openWaitlist}>
      {label}
    </button>
  );
}
