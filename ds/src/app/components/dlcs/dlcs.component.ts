import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dlcs',
  templateUrl: './dlcs.component.html',
  styleUrls: ['./dlcs.component.css']
})
export class DlcsComponent implements OnInit {
  numbers = [2, 3, 4, 5, 6]

  dlcs = [
    {
      name:"Reign Of Giants",
      path:"rog",
      description:"Don’t Starve: Reign of Giants is an expansion pack that adds new characters, seasons, creatures, biomes, and other challenges to Don’t Starve. <br> The entire world of Don’t Starve has been expanded and is now even more uncompromising! New mysteries, challenges and scientific innovations await your discovery. Manage your resources well, because the wilderness of Don’t Starve has learned some new tricks.",
      features: [
        {
          h: "New playable characters:",
          p: "Reign of Giants adds two characters for players to discover and survive with. Play as Wigfrid, a stage actress who went a bit too far with method acting on her latest role, an ancient Valkyrie, or Webber, a young boy who lives inside the spider who tried to eat him long ago."
        },
        {
          h: "Year-round starvation:",
          p: "Struggle through a full year of seasons as you experience the torrential rain falls of spring and the blistering heat of summer."
        },
        {
          h: "A bigger, badder world:",
          p: "New biomes have been filled to the brim with new creatures and gatherables that will either help you survive - or kill you."
        },
        {
          h: "An extra save slot:",
          p: "You asked, we delivered."
        },
        {
          h: "Giants:",
          p: "They’re in the name for crying out loud!"
        },
      ]
    },
    {
      name:"Shipwrecked",
      path:"sw",
      description:"Klei Entertainment has partnered with our friends at CAPY, creators of Superbrothers: Sword and Sworcery, Super Time Force and Below; to bring fans of Don’t Starve the latest single-player expansion: Don’t Starve: Shipwrecked! <br> In Don't Starve: Shipwrecked, Wilson finds himself stranded in a tropical archipelago. He must learn to survive all over again in this new environment filled with new biomes, seasons, and creatures. <br> Don’t let the tropical breeze lull you into a false sense of security - the world might be different, but it is still equal parts unforgiving and uncompromising. You will quickly find these islands are full to the brim with things that want to kill you.",
      features: [
        {
          h: "Navigate the Open Ocean:",
          p: "Craft a boat and set sail for adventure!"
        },
        {
          h: "Explore an Entirely New World:",
          p: "The entire world is different. Explore new biomes filled with new resources. Scavenge for new sources of food. Run for your life from a host of new creatures."
        },
        {
          h: "Brave New Seasons:",
          p: "A set of tropically inspired seasons will try their hardest to kill you."
        },
        {
          h: "Craft New Recipes:",
          p: "Build an array of new gadgets to help yourself survive these harsh islands."
        }
      ]
    },
    {
      name:"Hamlet",
      path:"h",
      description:"In Don’t Starve: Hamlet, Wilson discovers a lost town of aristocratic Pigmen nestled within a foreboding tropical jungle. <br> Can you readjust to society as an outsider? Can you earn fame and riches recovering lost relics? Will you weather the Aporkalypse?",
      features: [
        {
          h: "Reacquaint to city life:",
          p: "Visit shops and trade with the pig society. Purchase and renovate your own home."
        },
        {
          h: "Delve into ancient ruins:",
          p: "Explore the lost world of an ancient pig civilization filled with traps and try your hand at treasure hunting."
        },
        {
          h: "Explore new lands:",
          p: "Discover the secrets of new wild life and seasons."
        },
        {
          h: "Craft and experiment with new items:",
          p: "Find new ingredients and recipes to solve new problems."
        }
      ]
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
