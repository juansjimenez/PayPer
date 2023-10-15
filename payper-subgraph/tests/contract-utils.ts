import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  ArticlePurchased,
  ArticleRated,
  CreatedEdition,
  CreatedJournalist,
  JounralistTipped,
  JournalistRated,
  OwnershipTransferred,
  PostedArticle
} from "../generated/Contract/Contract"

export function createArticlePurchasedEvent(
  articleId: BigInt,
  purchaser: Address,
  paidAmount: BigInt
): ArticlePurchased {
  let articlePurchasedEvent = changetype<ArticlePurchased>(newMockEvent())

  articlePurchasedEvent.parameters = new Array()

  articlePurchasedEvent.parameters.push(
    new ethereum.EventParam(
      "articleId",
      ethereum.Value.fromUnsignedBigInt(articleId)
    )
  )
  articlePurchasedEvent.parameters.push(
    new ethereum.EventParam("purchaser", ethereum.Value.fromAddress(purchaser))
  )
  articlePurchasedEvent.parameters.push(
    new ethereum.EventParam(
      "paidAmount",
      ethereum.Value.fromUnsignedBigInt(paidAmount)
    )
  )

  return articlePurchasedEvent
}

export function createArticleRatedEvent(
  articleId: BigInt,
  rating: BigInt,
  totalRating: BigInt,
  amountOfRatings: BigInt
): ArticleRated {
  let articleRatedEvent = changetype<ArticleRated>(newMockEvent())

  articleRatedEvent.parameters = new Array()

  articleRatedEvent.parameters.push(
    new ethereum.EventParam(
      "articleId",
      ethereum.Value.fromUnsignedBigInt(articleId)
    )
  )
  articleRatedEvent.parameters.push(
    new ethereum.EventParam("rating", ethereum.Value.fromUnsignedBigInt(rating))
  )
  articleRatedEvent.parameters.push(
    new ethereum.EventParam(
      "totalRating",
      ethereum.Value.fromUnsignedBigInt(totalRating)
    )
  )
  articleRatedEvent.parameters.push(
    new ethereum.EventParam(
      "amountOfRatings",
      ethereum.Value.fromUnsignedBigInt(amountOfRatings)
    )
  )

  return articleRatedEvent
}

export function createCreatedEditionEvent(
  id: BigInt,
  date: BigInt,
  articlesOfEdition: Array<BigInt>
): CreatedEdition {
  let createdEditionEvent = changetype<CreatedEdition>(newMockEvent())

  createdEditionEvent.parameters = new Array()

  createdEditionEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  createdEditionEvent.parameters.push(
    new ethereum.EventParam("date", ethereum.Value.fromUnsignedBigInt(date))
  )
  createdEditionEvent.parameters.push(
    new ethereum.EventParam(
      "articlesOfEdition",
      ethereum.Value.fromUnsignedBigIntArray(articlesOfEdition)
    )
  )

  return createdEditionEvent
}

export function createCreatedJournalistEvent(
  name: string,
  description: string,
  journalistAddress: Address
): CreatedJournalist {
  let createdJournalistEvent = changetype<CreatedJournalist>(newMockEvent())

  createdJournalistEvent.parameters = new Array()

  createdJournalistEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  createdJournalistEvent.parameters.push(
    new ethereum.EventParam(
      "description",
      ethereum.Value.fromString(description)
    )
  )
  createdJournalistEvent.parameters.push(
    new ethereum.EventParam(
      "journalistAddress",
      ethereum.Value.fromAddress(journalistAddress)
    )
  )

  return createdJournalistEvent
}

export function createJounralistTippedEvent(
  journalist: Address,
  tipAmount: BigInt,
  message: string
): JounralistTipped {
  let jounralistTippedEvent = changetype<JounralistTipped>(newMockEvent())

  jounralistTippedEvent.parameters = new Array()

  jounralistTippedEvent.parameters.push(
    new ethereum.EventParam(
      "journalist",
      ethereum.Value.fromAddress(journalist)
    )
  )
  jounralistTippedEvent.parameters.push(
    new ethereum.EventParam(
      "tipAmount",
      ethereum.Value.fromUnsignedBigInt(tipAmount)
    )
  )
  jounralistTippedEvent.parameters.push(
    new ethereum.EventParam("message", ethereum.Value.fromString(message))
  )

  return jounralistTippedEvent
}

export function createJournalistRatedEvent(
  journalist: Address,
  rating: BigInt,
  totalRating: BigInt,
  amountOfRatings: BigInt
): JournalistRated {
  let journalistRatedEvent = changetype<JournalistRated>(newMockEvent())

  journalistRatedEvent.parameters = new Array()

  journalistRatedEvent.parameters.push(
    new ethereum.EventParam(
      "journalist",
      ethereum.Value.fromAddress(journalist)
    )
  )
  journalistRatedEvent.parameters.push(
    new ethereum.EventParam("rating", ethereum.Value.fromUnsignedBigInt(rating))
  )
  journalistRatedEvent.parameters.push(
    new ethereum.EventParam(
      "totalRating",
      ethereum.Value.fromUnsignedBigInt(totalRating)
    )
  )
  journalistRatedEvent.parameters.push(
    new ethereum.EventParam(
      "amountOfRatings",
      ethereum.Value.fromUnsignedBigInt(amountOfRatings)
    )
  )

  return journalistRatedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createPostedArticleEvent(
  id: BigInt,
  name: string,
  journalist: Address,
  freeContent: string,
  url: string,
  price: BigInt,
  date: BigInt,
  newsType: BigInt
): PostedArticle {
  let postedArticleEvent = changetype<PostedArticle>(newMockEvent())

  postedArticleEvent.parameters = new Array()

  postedArticleEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  postedArticleEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  postedArticleEvent.parameters.push(
    new ethereum.EventParam(
      "journalist",
      ethereum.Value.fromAddress(journalist)
    )
  )
  postedArticleEvent.parameters.push(
    new ethereum.EventParam(
      "freeContent",
      ethereum.Value.fromString(freeContent)
    )
  )
  postedArticleEvent.parameters.push(
    new ethereum.EventParam("url", ethereum.Value.fromString(url))
  )
  postedArticleEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )
  postedArticleEvent.parameters.push(
    new ethereum.EventParam("date", ethereum.Value.fromUnsignedBigInt(date))
  )
  postedArticleEvent.parameters.push(
    new ethereum.EventParam(
      "newsType",
      ethereum.Value.fromUnsignedBigInt(newsType)
    )
  )

  return postedArticleEvent
}
