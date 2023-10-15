import { CreatedEdition } from "../../generated/Contract/Contract";
import { Edition } from "../../generated/schema";
import { BIG_INT_NEG_ONE, BIG_INT_ZERO, BYTES_EMPTY } from "../lib/constants";
import { BigInt, Bytes } from "@graphprotocol/graph-ts";


export function createEdition(event: CreatedEdition): Edition {
  let id = event.params.id.toHexString()
  let edition = Edition.load(id);

  if (edition == null) {
    edition = new Edition(id);
    edition.date = event.params.date;
    edition.articlesOfEdition = event.params.articlesOfEdition;
  }

  return edition as Edition;
}

export function getEdition(id: string): Edition {
    let edition = Edition.load(id);

  if (edition == null) {
    edition = new Edition(id);
    edition.date = BIG_INT_ZERO;
    edition.articlesOfEdition = [];
  }

  return edition as Edition;

}