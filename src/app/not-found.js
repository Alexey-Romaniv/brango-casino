import Button from "@/components/Button/Button";
export default function NotFound() {
  return (
    <div className="not-found__box">
      <h2>404</h2>
      <p>The page you were looking for does not exist.</p>
      <p>You may have mistyped the address or the page may have moved.</p>
      <Button href={"/"} size="big">
        Home page
      </Button>
    </div>
  );
}
