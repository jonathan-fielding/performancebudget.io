interface CardProps {
  title: string;
  description: string;
  author: string;
  path: string;
}

export default function Card({ title, description, author, path }: CardProps) {
  return (
    <a
      href={path}
      className="p-6 shadow-lg rounded-lg bg-gray-100 text-gray-700"
    >
      <h2 className="font-semibold text-3xl mb-5">{title}</h2>
      <p>{description}</p>
      <hr className="my-6 border-gray-300" />
      <p>{author}</p>
    </a>
  );
}
