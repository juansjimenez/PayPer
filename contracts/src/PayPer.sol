// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/access/Ownable.sol";

contract PayPer is Ownable {
    enum NewsType {
        POLITICS,
        ECONOMICS,
        SPORTS,
        TECH,
        BUSINESS,
        ENTERTAINMENT
    }

    struct Article {
        uint256 id;
        address journalist;
        string name;
        string freeContent;
        string encryptedUrl;
        uint256 rating;
        uint256 price;
        uint256 totalPaymentReceived;
        NewsType newsType;
    }

    struct Journalist {
        address id;
        string name;
        string description;
        uint256 rating;
    }

    struct Edition {
        uint256 id;
        uint256 date;
        uint256[] articlesOfEdition;
    }
    mapping(uint256 => Article) public articles;
    mapping(address => Journalist) public journalists;
    mapping(uint256 => Edition) public editions;

    uint256 public currentArticleId = 0;
    uint256 public currentEditionId = 0;

    constructor(address owner) Ownable(owner) {}
 
    function postArticle(string memory name, string memory freeContent, string memory url, uint256 price, uint256 newsType) external {
        currentArticleId += 1;
        Article memory article = Article({
            id: currentArticleId,
        journalist: msg.sender,
        name: name,
        freeContent: freeContent,
        encryptedUrl: url,
        rating: 0,
        price: price,
        totalPaymentReceived: 0,
        newsType: NewsType(newsType)
        });

        articles[currentArticleId] = article;
    }

    function createJournalist(string memory name, string memory description, address journalistAddress) external onlyOwner{
        
        Journalist memory journalist = Journalist({
        id: journalistAddress,
        name: name,
        description: description,
        rating: 0
        });

        journalists[journalistAddress] = journalist;
    }

}
