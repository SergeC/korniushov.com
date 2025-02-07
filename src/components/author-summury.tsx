import {authorOccupation} from "@/lib/consts";

export function AuthorSummury() {
  return (<>
    <div className="flex max-w-full flex-col items-center justify-center text-justify">
      <div className="prose max-w-full pb-8 pt-10 dark:prose-invert xl:text-xl">
        <p>
          Howdy! I&#39;m <b>Serhii</b>, a <i>{authorOccupation}</i> with 10+ years of experience building scalable systems, primarily in PHP. Committed to
          innovation-led software architecture solutions with demonstrated expertise in owning client relationships,
          leading teams, and delivering software products from start to end.
        </p>
      </div>
    </div>
  </>);
}
