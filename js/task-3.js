function getElementWidth(content, padding, border) {
    const contentNum = Number.parseInt(content);
    const paddingNum = Number.parseInt(padding);
    const borderNum = Number.parseInt(border);
    return contentNum + paddingNum * 2 + borderNum * 2;
}
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
