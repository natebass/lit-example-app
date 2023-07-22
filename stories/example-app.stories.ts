import { html, TemplateResult } from 'lit';
import '../src/example-app.js';

export default {
  title: 'ExampleApp',
  component: 'example-app',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  header?: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({ header, backgroundColor = 'white' }: ArgTypes) => html`
  <example-app style="--example-app-background-color: ${backgroundColor}" .header=${header}></example-app>
`;

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
