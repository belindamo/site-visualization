module.exports = {
  "nodes": [
    {
      "id": "n0",
      "label": "A node",
      "size": 3
    },
    {
      "id": "n1",
      "label": "Another node",
      "size": 2
    },
    {
      "id": "n2",
      "label": "And a last one",
      "size": 1
    }
  ],
  "edges": [
    {
      "id": "e0",
      "source": "n0",
      "target": "n1"
    },
    {
      "id": "e1",
      "source": "n1",
      "target": "n2"
    },
    {
      "id": "e2",
      "source": "n2",
      "target": "n0"
    }
  ]
};