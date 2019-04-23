export const validateNotEmpty = (value: string) => {
  return value === '' || value === null || value === undefined
    ? 'is empty!'
    : undefined;
};

export const validateEmail = (email: string) => {
  // tslint:disable-next-line: max-line-length
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return !re.test(String(email).toLowerCase()) ? 'invalid email!' : undefined;
};

export function combineValidators<T>(
  validators: Array<(value: T) => string | undefined>
): (value: T) => string | undefined {
  return (value: any) =>
    validators.reduce(
      (maybeError, validator) => {
        return maybeError !== undefined ? maybeError : validator(value);
      },
      undefined as string | undefined
    );
}
