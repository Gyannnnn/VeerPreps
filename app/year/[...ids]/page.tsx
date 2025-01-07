import Subjects from "@/app/my_components/pages/Subjectspage";
import Yearpage from "@/app/my_components/pages/Yearpage";

interface pageprops{
  ids: string[];
}


export default function page({ params }: { params: pageprops }) {
  const branchId = params.ids[0];
  const ids = params.ids;
  console.log(ids.length);
  const page = ids.length;
  switch (page) {
    case 1:
      return <Yearpage branchId={branchId} />;
    case 3:
      return (
        <div className="h-screen w-screen flex items-center justify-center">
          <h1>Subjects</h1>
        </div>
      );
  }

  return <Subjects />;
}
