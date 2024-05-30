export const getItemListSchemaData = ({
  cardData = [],
  title = "",
  slug = "",
  description = "",
}) => {
  if (cardData.length !== 0) {
    const itemListData = cardData.map((item, index) => {
      return {
        "@type": "ListItem",
        position: index + 1,
        name: item.title,
        description: item.description,
      };
    });
    const itemSchemaData = `
        {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "url": "https://sekel.tech/${slug}",
            "itemListOrder": "http://schema.org/ItemListOrderDescending",
            "numberOfItems": "${cardData.length}", 
            "name": "${title}",
            "description": "${description}",
            "itemListElement": ${JSON.stringify(itemListData)}
          }`;
    return itemSchemaData;
  }
  return null;
};
