import { ReactNode } from "react"

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <div className='flex h-screen flex-col'>
        <main className='flex-1 wrapper'>{children}</main>
    </div>
  );
}

export default RootLayout