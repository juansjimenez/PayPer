import { CreatedJournalist } from "../../generated/Contract/Contract";
import { Journalist } from "../../generated/schema";
import { BIG_INT_ZERO } from "../lib/constants";


export function createJournalist(event: CreatedJournalist): Journalist {
  let id = event.params.journalistAddress.toHexString()
  let journalist = Journalist.load(id);

  if (journalist == null) {
    journalist = new Journalist(id);
    journalist.name = event.params.name;
    journalist.description = event.params.description;
    journalist.allArticles = [];
    journalist.amountOfRatings = BIG_INT_ZERO;
    journalist.totalRating = BIG_INT_ZERO;
    journalist.totalTips = BIG_INT_ZERO;
  }

  return journalist as Journalist;
}

export function getJournalist(id: string): Journalist {
    let journalist = Journalist.load(id);

  if (journalist == null) {
    journalist = new Journalist(id);
    journalist.name = "";
    journalist.description = "";
    journalist.allArticles = [];
    journalist.amountOfRatings = BIG_INT_ZERO;
    journalist.totalRating = BIG_INT_ZERO;
    journalist.totalTips = BIG_INT_ZERO;
  }

  return journalist as Journalist;

}