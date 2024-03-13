import { create } from 'zustand';

interface LoginModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  isLoginPass: boolean;
  onLoginPass: () => void;
  onLogoutPass: () => void;
}

const useLoginModal = create<LoginModalStore>((set) => ({
  isOpen: false,
  isLoginPass: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  onLoginPass: () => set({ isLoginPass: true }),
  onLogoutPass: () => set({ isLoginPass: false }),
}))

export default useLoginModal;
