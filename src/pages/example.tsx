import { Link, useParams } from "react-router-dom";

const ExamplePage = () => {
  const { exampleId } = useParams<{ exampleId: string }>();

  return (
    <div className="text-red-500">
      Example Page {exampleId} <Link to="/">Go back to Home</Link>
    </div>
  );
};

export default ExamplePage;
