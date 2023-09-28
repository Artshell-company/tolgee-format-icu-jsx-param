jest.autoMockOff();

import '@testing-library/jest-dom';
import React from 'react';
import { Tolgee, TolgeeProvider, T } from '@tolgee/react';
import { render } from '@testing-library/react';
import { FormatIcu } from './FormatIcu';

describe('FormatIcu', () => {
  const tolgee = Tolgee().use(FormatIcu()).init({
    language: 'en',
    staticData: {
      en: {
        standard: 'lorem ipsum',
        withParam: 'lorem {param} ipsum',
        withTag: 'lorem <tag>ipsum</tag>',
      },
    }
  });

  it('formats simple string', () => {
    const { asFragment } = render(
      <TolgeeProvider
        tolgee={tolgee}
        fallback={<>loading</>}
        options={{ useSuspense: false }}
      >
        <T keyName="standard" />
      </TolgeeProvider>
    );

    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        lorem ipsum
      </DocumentFragment>
    `);
  });

  it('formats string with simple param', () => {
    const { asFragment } = render(
      <TolgeeProvider
        tolgee={tolgee}
        fallback={<>loading</>}
        options={{ useSuspense: false }}
      >
        <T keyName="withParam" params={{ param: 'value' }} />
      </TolgeeProvider>
    );

    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        lorem value ipsum
      </DocumentFragment>
    `);
  });

  it('formats string with jsx param', () => {
    const { asFragment } = render(
      <TolgeeProvider
        tolgee={tolgee}
        fallback={<>loading</>}
        options={{ useSuspense: false }}
      >
        <T keyName="withParam" params={{ param: <strong>value</strong> }} />
      </TolgeeProvider>
    );

    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        lorem 
        <strong>
          value
        </strong>
         ipsum
      </DocumentFragment>
    `);
  });

  it('formats string with jsx as tag param', () => {
    const { asFragment } = render(
      <TolgeeProvider
        tolgee={tolgee}
        fallback={<>loading</>}
        options={{ useSuspense: false }}
      >
        <T keyName="withTag" params={{ tag: <strong/> }} />
      </TolgeeProvider>
    );

    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        lorem 
        <strong>
          ipsum
        </strong>
      </DocumentFragment>
    `);
  });

  it('formats string with function as tag param', () => {
    const { asFragment } = render(
      <TolgeeProvider
        tolgee={tolgee}
        fallback={<>loading</>}
        options={{ useSuspense: false }}
      >
        <T keyName="withTag" params={{ tag: (parts) => <strong>{parts}</strong> }} />
      </TolgeeProvider>
    );

    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        lorem 
        <strong>
          ipsum
        </strong>
      </DocumentFragment>
    `);
  });
});
