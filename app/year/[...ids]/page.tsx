import Contents from "@/app/my_components/pages/Contents";
import Subjects from "@/app/my_components/pages/Subjectspage";
import Viewer from "@/app/my_components/pages/Viewer";
import Yearpage from "@/app/my_components/pages/Yearpage";

interface PageProps {
  params: {
    ids: string[];
  };
}

export default async function Page({ params }: PageProps) {
  const branchId = params.ids[0];
  const parsedBranchId = parseInt(branchId, 10);
  const ids = params.ids;

  console.log(ids);
  console.log(ids.length);

  switch (ids.length) {
    case 1:
      return <Yearpage branchId={parsedBranchId} />;
    case 3:
      return <Subjects ids={ids} />;
    case 4:
      return <Contents />;
    case 5:
      return <Viewer />;
    default:
      return <div>Page not found</div>;
  }
}

export async function generateStaticParams() {
  // Example of fetching dynamic paths
  const paths = await fetchDynamicPaths();

  return paths.map((path: string) => ({
    ids: path.split('/'), // Assuming your paths are in a string format that needs splitting
  }));
}

// Example function to simulate fetching dynamic paths
async function fetchDynamicPaths(): Promise<string[]> {
  return [
    "branch1/year1",
    "branch2/year2",
    // Add more dynamic paths as needed
  ];
}
