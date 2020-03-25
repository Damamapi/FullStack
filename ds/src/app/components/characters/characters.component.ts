import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  characters = [
    {
      name:"Wilson",
      description: "Grows a magnificent beard"
    },
    {
      name:"Willow",
      description: "Immune to Fire damage. Has a sweet Lighter. Lights fires when nervous."
    },
    {
      name:"Wolfang",
      description: "Grows stronger with a full belly. Is afraid of monsters and the dark."
    },
    {
      name:"Wendy",
      description: "Is haunted by her twin sister. Feels comfortable in the dark. Doesn't hit very hard."
    },
    {
      name:"WX-78",
      description: "Not a picky eater. Is charged by lightning, but damaged by water. Can upgrade with gears."
    },
    {
      name:"Wickerbottom",
      description: "Knows many things. Self-publishes books. Can't sleep, hates food spoilage."
    },
    {
      name:"Woodie",
      description: "Has a lovely axe. And a terrible secret. Is thankful for bountiful harvests."
    },
    {
      name:"Wes",
      description: "Can't talk. Has trouble staying alive. Practices balloonomancy."
    },
    {
      name:"Maxwell",
      description: "Is dapper, but frail. Can split his mind into pieces. On a first-name basis with the night."
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

