import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { ChefComponent } from '../../chef/chef.component';

@Component({
  selector: 'app-chefs-section',
  imports: [ChefComponent],
  templateUrl: './chefs-section.component.html',
  styleUrl: './chefs-section.component.scss',
})
export class ChefsSectionComponent {
  chefs = [
    {
      name: 'Настя',
      image: '../../../../assets/img/nastya.jpg',
      image2x: '../../../../assets/img/nastya@2x.jpg',
      alt: 'Кухар Настя',
      greeting: 'Привіт, я Настя!',
      description: [
        'Вже 10 років, я втілюю <br /> у життя цікаві та смачні ідеї.',
        'Я випічу для вас найсмачніщі вироби!',
      ],
    },
    {
      name: 'Влад',
      image: '../../../../assets/img/vlad.jpg',
      image2x: '../../../../assets/img/vlad@2x.jpg',
      alt: 'Кухар Влад',
      greeting: 'Привіт, я Влад!',
      description: [
        'Мій кондитерський стаж вже 18 років. <span class="uppercase" lang="en">Shop bakery</span> - це наша любов, з якою ми ділимось кожен раз з Вами через нашу випічку!',
        'Я зроблю для вас унікальну начинку на будь який смак!',
      ],
    },
  ];
}
