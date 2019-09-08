import { saveAs } from 'file-saver';

function sumObjectValues(obj) {
  const keys = Object.keys(obj);
  let total = 0;

  keys.forEach((key) => {
    total += obj[key];
  })

  return total;
}

export default function buildJson(budget) {
  const total = sumObjectValues(budget);

  const content = `[
    {
      "resourceSizes": [
        {
          "resourceType": "document",
          "budget": ${budget.html}
        },
        {
          "resourceType": "script",
          "budget": ${budget.javascript}
        },
        {
          "resourceType": "image",
          "budget": ${budget.images}
        },
        {
          "resourceType": "stylesheet",
          "budget": ${budget.css}
        },
        {
          "resourceType": "media",
          "budget": ${budget.video}
        },
        {
          "resourceType": "font",
          "budget": ${budget.fonts}
        },
        {
          "resourceType": "total",
          "budget": ${total}
        }
      ]
    }
  ]`;
  const filename = "budget.json";

  const blob = new Blob([content], {
    type: "text/plain;charset=utf-8"
  });

  saveAs(blob, filename);
}