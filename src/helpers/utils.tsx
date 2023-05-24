import FadeInContent from '~/components/common/FadeInContent';

const getTextChunks = (content: string, highlights: Array<string>) => {
    // remove any highlights that aren't present in the text content
    const filteredHighlights = highlights.filter(highlight => content.indexOf(highlight) !== -1);
  
    if (!filteredHighlights) {
      return [content];
    }
  
    const textChunks: string[] = [];
    let searchIndex = 0;
  
    filteredHighlights.forEach((highlight, i) => {
      const index = content.indexOf(highlight);
      const chunk = content.slice(searchIndex, index);
      textChunks.push(chunk);
      textChunks.push(highlight);
  
      searchIndex = index + highlight.length;
  
      // if last highlight has been found make sure remainder of text is included
      if (highlights.length === i + 1) {
        textChunks.push(content.slice(searchIndex));
      }
    })
  
    return textChunks;
  }

export const getHighlightedText = (content: string, highlights: Array<string>) =>
  getTextChunks(content, highlights).map(chunk => (
    <FadeInContent
      key={chunk}
      alwaysVisible={highlights.includes(chunk)}
    >
      {chunk}
    </FadeInContent>
  ));
