export const dynamic = "force-dynamic";

export default async function Layout({ params: { subid }, children }) {
  return (
    <div>
      Sub {subid} Layout:
      <br />
      <br />
      {children}
    </div>
  )
}
