import Link from "next/link";
import { sleep } from "../../sleep";

export const dynamic = "force-dynamic";

/** Add your relevant code here for the issue to reproduce */
export default async function Page({ params: { subid } }) {
  await sleep(2_000);
  return (
    <div>
      {subid} sub loaded. But without showing loading.tsx
      <br />
      <Link href="/">Go to main</Link>
      <br />
    </div>
  );
}
