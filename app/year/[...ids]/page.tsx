import Contents from "@/app/my_components/pages/Contents";
import Subjects from "@/app/my_components/pages/Subjectspage";
import Viewer from "@/app/my_components/pages/Viewer";
import Yearpage from "@/app/my_components/pages/Yearpage";

interface PageProps {
  params: {
    ids: string[];
  };
}

export default function Page({ params }: PageProps) {
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
