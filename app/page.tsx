import Link from "next/link";
import { sleep } from "./sleep";

/** Add your relevant code here for the issue to reproduce */
export default async function Page() {
  sleep(2_000);
  const rdmId = Math.random().toFixed(2);
  return (
    <>
      Home loaded
      <br />
      <Link href={"/loading_tsx_is_working/" + rdmId}>Go to subpage. Loading.tsx will show up</Link>
      <br />
      <Link href={"/loading_tsx_not_working/" + rdmId}>Go to broken subpage. Loading.tsx will not show up.</Link>
    </>
  );
}
