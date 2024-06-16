import { sleep } from "../../sleep";

export const dynamic = "force-dynamic";

export default async function Layout({ params: { subid }, children }) {
  await sleep(5_000)
  return (
    <div>
      Sub {subid} Layout:
      <br />
      <br />
      {children}
    </div>
  )
}
