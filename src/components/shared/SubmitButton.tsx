import type { ButtonProps } from '@mui/material';
import { Button, CircularProgress } from '@mui/material';
import * as React from 'react';

export type SubmitButtonProps = {
  children: React.ReactElement<ButtonProps>;
  isSubmitting?: boolean;
  submittingColor?: string;
  submittingSize?: string | number;
  submittingText?: string;
};

const SubmitButton = ({
  children,
  isSubmitting,
  submittingColor,
  submittingSize = '1rem',
  submittingText = 'Submitting...',
}: SubmitButtonProps) => {
  const { startIcon, disabled, color, ...rest } = children.props;
  const submittingIconColor = submittingColor || color;

  return (
    <Button
      {...rest}
      startIcon={
        !isSubmitting
          ? (
              startIcon
            )
          : (
              <CircularProgress
                style={{ color: submittingIconColor }}
                size={submittingSize}
              />
            )
      }
      disabled={disabled ?? isSubmitting}
    >
      {isSubmitting && submittingText ? submittingText : children.props.children}
    </Button>
  );
};

export default SubmitButton;
