import { QueryClient } from "@tanstack/query-core";
import { cache } from "react";
import { defaultReactQuerySettings } from "./constants";

const getQueryClient = cache(() => new QueryClient(defaultReactQuerySettings));

export default getQueryClient;
