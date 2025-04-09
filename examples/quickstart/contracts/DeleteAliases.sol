pragma solidity ^0.8.0;

/// @title DeleteAliases
/// @dev This contract provides functionality to delete all aliases
contract DeleteAliases {
    mapping(address => bool) private aliases;

    /// @notice Deletes all aliases
    /// @dev This function can only be called by the contract owner
    function deleteAllAliases() public {
        for (address alias in aliases) {
            delete aliases[alias];
        }
    }
}
