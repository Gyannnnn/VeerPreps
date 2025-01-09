import Contents from "@/app/my_components/pages/Contents";
import Subjects from "@/app/my_components/pages/Subjectspage";
import Viewer from "@/app/my_components/pages/Viewer";
import Yearpage from "@/app/my_components/pages/Yearpage";

interface pageprops{
  ids: string[];
}


export default function page({ params }: { params: pageprops }) {
  const branchId = params.ids[0];
  const parsedbranchid = parseInt(branchId)
  const ids = params.ids;
  console.log(ids)
  console.log(ids.length);
  const page = ids.length;
  switch (page) {
    case 1:
      return <Yearpage branchId={parsedbranchid} />;
    case 3:
      return (
        <Subjects ids={ids} />
      );
    case 4:
      return (
        <Contents/>
      )
    case 5:
      return (
        <Viewer/>
      )
  }


}
