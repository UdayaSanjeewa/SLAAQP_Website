// components/RegisterButton.tsx

import { Menu } from 'lucide-react';
import { Button } from '../../components/atoms/Button';

const RegisterButton = () => {
  return (
    <Button
      variant="default"
      size="md"
      className="bg-[#f7df75] text-[#2f1e36] hover:bg-[#f6d65e] text-base font-bold tracking-widest px-6 py-3"
    >
      REGISTER
      <Menu className="ml-2" size={20} />
    </Button>
  );
};

export default RegisterButton;
