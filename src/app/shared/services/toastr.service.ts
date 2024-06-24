// src/app/services/toastr.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Toast {
  type: 'success' | 'error' | 'warning';
  message: string;
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class ToastrService {
  private toasts: Toast[] = [];
  private toastSubject = new BehaviorSubject<Toast[]>(this.toasts);

  getToastObservable() {
    return this.toastSubject.asObservable();
  }

  showSuccess(message: string) {
    this.showToast('success', message);
  }

  showError(message: string) {
    this.showToast('error', message);
  }

  showWarning(message: string) {
    this.showToast('warning', message);
  }

  private showToast(type: 'success' | 'error' | 'warning', message: string) {
    const id = new Date().getTime();
    const toast: Toast = { type, message, id };
    this.toasts.push(toast);
    this.toastSubject.next(this.toasts);
    setTimeout(() => this.removeToast(id), 3000); // Auto remove toast after 3 seconds
  }

  private removeToast(id: number) {
    this.toasts = this.toasts.filter(toast => toast.id !== id);
    this.toastSubject.next(this.toasts);
  }
}
