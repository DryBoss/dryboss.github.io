export default function ProjectPage({ params }: { params: { name: string } }) {
  return (
    <div className="p-10">
      <h1>Full Page: {params.name}</h1>
      <p>This is a full-page route for the project.</p>
    </div>
  );
}
