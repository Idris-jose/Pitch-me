import CustomButton from "./Button";

export default function Header() {
    return (
        <header >
            <div>
                <h1>Welcome back, Alex!</h1>
                <p>Here's what's happening with your pitch practice today.</p>
            </div>

            <div>
                <CustomButton>12 day streak</CustomButton>
                <CustomButton>Start Practice</CustomButton>
            </div>
        </header>
    );
}