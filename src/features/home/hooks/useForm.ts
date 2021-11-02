import { ChangeEvent, useState } from 'react';

export interface InitialFormState {
  [key: string]: string;
}

const useForm = (initialState: InitialFormState) => {
  const [formState, setFormState] = useState(initialState);

  const setNewInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  return {
    formState,
    setNewInputValue,
  };
};

export { useForm };
