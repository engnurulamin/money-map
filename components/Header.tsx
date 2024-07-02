import { SignedIn, SignInButton, SignedOut, UserButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h2>Money Map</h2>
        <div>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
};

export default Header;
