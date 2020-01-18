export const HEADER_HEIGHT = 80;
export const HEADER_SECTION_MAX_HEIGHT = 200;

export type HeaderItemSectionItem = {
  label: string;
  id: string;
}

export type HeaderItemSection = {
  id?: string;
  title?: string;
  items?: HeaderItemSectionItem[];
};

export type HeaderItem = {
  label: string;
  id: string;
  url?: string;
  sections?: HeaderItemSection[];
  sectionsBottomLink?: HeaderItemSectionItem;
}

export const headerItems: HeaderItem[] = [
  {
    label: 'Vision',
    id: 'vision',
  }, {
    label: 'Solutions',
    id: 'solutions',
    sections: [{
      items: [
        {
          label: 'Autonomous Vehicles',
          id: 'autonomous',
        }, {
          label: 'Geospatial',
          id: 'geospatial',
        }, {
          label: 'E-commerce & Retail',
          id: 'ecom',
        }, {
          label: 'Medical',
          id: 'medical',
        }, {
          label: 'Insurance',
          id: 'insurance',
        }, {
          label: 'Robotics',
          id: 'robotics',
        }, {
          label: 'Chem, Bio & Pharma',
          id: 'chem',
        }
      ]
    }]
  }, {
    label: 'Products',
    id: 'products',
    sectionsBottomLink: {
      label: 'For Enterprise',
      id: 'enterprise'
    },
    sections: [{
      id: 'core',
      title: 'CORE',
      items: [
        {
          label: 'Platform',
          id: 'platform',
        }, {
          label: 'Labeling Service',
          id: 'labeling-service',
        }
      ]
    }, {
      title: 'FOR COMPUTER VISION',
      id: 'for-computer-vision',
      items: [
        {
          label: 'Object Detection',
          id: 'object-detection'
        }, {
          label: 'Image Segmentation',
          id: 'image-segmentation'
        }, {
          label: 'Image Classification',
          id: 'image-classification'
        }, 
      ]
    }, {
      title: 'FOR NLP & OTHER',
      id: 'for-nlp-and-other',
      items: [
        {
          label: 'Text Classification',
          id: 'text-classification'
        }, {
          label: 'Custom App SDK',
          id: 'custom-app-sdk'
        }
      ]
    }]
  }, {
    label: 'Blog',
    id: 'blog',
  }, {
    label: 'Company',
    id: 'company',
    sections: [{
      items: [
        {
          label: 'About',
          id: 'about',
        }, {
          label: 'Careers',
          id: 'careers',
        }, {
          label: 'Team',
          id: 'team',
        }
      ]
    }]
  }, {
    label: 'Pricing',
    id: 'pricing',
  }, {
    label: 'Docs',
    id: 'docs',
  }
];