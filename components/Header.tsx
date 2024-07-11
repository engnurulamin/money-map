import { SignedIn, SignInButton, SignedOut, UserButton } from "@clerk/nextjs";

const Header = async () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/">
          <h2>Money Map</h2>
        </a>
        <div>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <span className="circle">
              <UserButton />
            </span>
          </SignedIn>
        </div>
      </div>
    </nav>
  );
};

export default Header;
