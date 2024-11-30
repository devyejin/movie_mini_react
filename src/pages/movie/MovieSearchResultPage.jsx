import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

export default function MovieSearchResultPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  return <div>야야 : {query}</div>;
}
