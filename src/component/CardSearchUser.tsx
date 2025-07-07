import "@mantine/core/styles.css";

import { Card } from "@mantine/core";
import { ReactNode } from "react";

interface MantineProps {
  children: ReactNode;
}

const CardSearchUser = ({ children }: MantineProps) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" className="w-full max-w-[600px]">
      {children}
    </Card>
  );
};

export default CardSearchUser;
