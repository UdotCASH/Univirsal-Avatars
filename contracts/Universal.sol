// SPDX-License-Identifier: MIT

pragma solidity ^0.8.2;

import "@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol";

contract Univirsal is ERC721Upgradeable {

  function initialize() initializer public {
        __ERC721_init("Univirsal Avatars","UNI-AVATAR");
   }

    function mint(address to, uint256 amount) public virtual {
        _mint(to, amount);
    }
}

contract UnivirsalV2 is Univirsal {
  uint public newValue;

  function versionCheck() pure public returns (string memory) {
    return "UnivirsalV2";
  }

  function incrementNewValue() public {
    newValue++;
  }
}
