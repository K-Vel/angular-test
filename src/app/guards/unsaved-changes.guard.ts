import { CanDeactivateFn } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { inject } from '@angular/core';
import { ConfirmDialogComponent } from '../components/confirm-dialog/confirm-dialog.component';

export interface CanDeactivateForm {
  sponsorForm: FormGroup;
}

export const unsavedChangesGuard: CanDeactivateFn<CanDeactivateForm> = (
  component
) => {
  const dialog = inject(MatDialog);

  if (!component.sponsorForm?.dirty) {
    return true;
  }
  const dialogRef = dialog.open(ConfirmDialogComponent, {
    maxWidth: '400px',
    width: '400px',
    minHeight: '230px',
    data: {
      title: 'Підтвердіть дію',
      message:
        'Ви ввели дані у форму. Якщо вийдете, вони будуть втрачені. Ви впевнені, що хочете вийти?',
      confirmText: 'Так, вийти',
      cancelText: 'Залишитись',
    },
    disableClose: true,
  });
  return dialogRef.afterClosed();
};
