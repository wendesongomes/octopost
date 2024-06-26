import { ReactNode } from 'react';

import classNames from 'classnames';

import scss from './CharacterLimit.module.scss';

import { ModuleProps } from './CharacterLimit.types.ts';

function CharacterLimit(props: ModuleProps): ReactNode {
  const remainingCharacters = props.maxLength - props.value.length;

  const svgColor = classNames(scss.svgColor, {
    [scss.exceeded]: 0 >= remainingCharacters,
  });

  const characterLimitClass = classNames(scss.characterLimit, {
    [scss.exceeded]: 0 >= remainingCharacters,
  });

  function renderWithIcon(): ReactNode {
    return (
      <div className={svgColor} data-testid="characterLimitWithIcon">
        {props.svg}
        <div className={characterLimitClass}>
          <span>{remainingCharacters}</span>
        </div>
      </div>
    );
  }

  function renderWithoutIcon(): ReactNode {
    return (
      <div className={characterLimitClass} data-testid="characterLimit">
        <p>
          {props.value.length}/{props.maxLength}
        </p>
      </div>
    );
  }

  return props.svg ? renderWithIcon() : renderWithoutIcon();
}

export default CharacterLimit;
