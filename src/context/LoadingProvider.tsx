import {LoadingAbsolute} from "@app/components";
import React, {useState} from "react";
import {LoadingContext} from "./loading";

export function LoadingProvider(props: any) {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <LoadingContext.Provider
      value={{
        loading: loading as boolean,
        show: () => setLoading(true),
        hide: () => setLoading(false),
        isLoading: () => loading,
      }}>
      <>
        {loading && <LoadingAbsolute />}
        {props.children}
      </>
    </LoadingContext.Provider>
  );
}
