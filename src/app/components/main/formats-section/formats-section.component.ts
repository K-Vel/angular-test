import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { register } from 'swiper/element/bundle';
import { FormatComponent } from '../../format/format.component';

//For Swiper
register();

interface FormatData {
  type: string;
  title: string;
  items: string[];
}

@Component({
  selector: 'app-formats-section',
  imports: [FormatComponent],
  templateUrl: './formats-section.component.html',
  styleUrl: './formats-section.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FormatsSectionComponent implements AfterViewInit {
  // Получаем ссылки на элементы из шаблона
  @ViewChild('swiperEl', { static: false }) swiperEl!: ElementRef;
  @ViewChild('prevBtn', { static: false }) prevBtn!: ElementRef;
  @ViewChild('nextBtn', { static: false }) nextBtn!: ElementRef;

  breakpoints = {
    540: {
      slidesPerView: 2,
    },
    980: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 3,
    },
  };

  formats: FormatData[] = [
    {
      type: 'walrus',
      title: 'Walrus',
      items: [
        'Площа: до 120 м2',
        'Меню: розширене меню',
        'Штат: 2 продавці-касири, 2 пекарі, 2 помічники пекаря, 2 офіціанти',
        'Посадкові місця: є',
      ],
    },
    {
      type: 'horseshoe',
      title: 'Horseshoe',
      items: [
        'Площа: до 25 м2',
        'Меню: найпопулярніші позиції меню',
        'Штат: 2 продавці-касири, 2 пекарі, 1 помічник пекаря',
        'Посадкові місця: відсутні',
      ],
    },
    {
      type: 'handlebar',
      title: 'Handlebar',
      items: [
        'Площа: до 15 м2',
        'Меню: найпопулярніші позиції меню',
        'Штат: 1 продавець, 1 пекар, 1 помічник пекаря',
        'Посадкові місця: відсутні',
      ],
    },
    // Duplicate for loop effect
    {
      type: 'walrus',
      title: 'Walrus',
      items: [
        'Площа: до 120 м2',
        'Меню: розширене меню',
        'Штат: 2 продавці-касири, 2 пекарі, 2 помічники пекаря, 2 офіціанти',
        'Посадкові місця: є',
      ],
    },
    {
      type: 'horseshoe',
      title: 'Horseshoe',
      items: [
        'Площа: до 25 м2',
        'Меню: найпопулярніші позиції меню',
        'Штат: 2 продавці-касири, 2 пекарі, 1 помічник пекаря',
        'Посадкові місця: відсутні',
      ],
    },
    {
      type: 'handlebar',
      title: 'Handlebar',
      items: [
        'Площа: до 15 м2',
        'Меню: найпопулярніші позиції меню',
        'Штат: 1 продавець, 1 пекар, 1 помічник пекаря',
        'Посадкові місця: відсутні',
      ],
    },
  ];

  // To connect navigation custom buttons
  ngAfterViewInit() {
    console.log(this.swiperEl, 'swiperEl');
    const swiperNativeEl = this.swiperEl.nativeElement as any;

    swiperNativeEl.navigation = {
      prevEl: this.prevBtn.nativeElement,
      nextEl: this.nextBtn.nativeElement,
    };

    swiperNativeEl.initialize();
  }
}
