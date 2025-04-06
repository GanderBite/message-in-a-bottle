export default function Home() {
  return (
    <div className="flex min-h-screen max-w-screen items-center justify-center bg-blue-400">
      <h1 className="text-4xl font-bold text-white">Message in a bottle!</h1>
    </div>
  );
}

export function meta() {
  return [
    { title: 'New React Router App' },
    { content: 'Welcome to React Router!', name: 'description' },
  ];
}
