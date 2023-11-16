import { ThemeSwitcher } from "../theme-switcher";

const Header = () => {
    return (
        <header className="w-full px-4 md:px-10 py-5 md:py-10 flex flex-row items-center justify-between border-b mb-10">
            <h1 className="text-2xl md:text-4xl font-semibold">omegle clone</h1>
            <ThemeSwitcher />
        </header>
    );
};

export default Header;
