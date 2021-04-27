import { objectType, queryType } from "nexus";

export const Company = objectType({
  name: "Company",
  definition(t) {
    t.model.id();
    t.model.symbol();
    t.model.name();
    t.model.description();
  },
});

export const Query = queryType({
  definition(t) {
    t.crud.company();
    t.crud.companies({ pagination: true, filtering: true });
  },
});