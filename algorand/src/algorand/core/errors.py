"""Domain-specific error types."""


class AlgoRandError(Exception):
    """Base application error."""


class NotFoundError(AlgoRandError):
    """Raised when an entity cannot be found."""


class ValidationError(AlgoRandError):
    """Raised when user input or payload fails validation."""


class IntegrationError(AlgoRandError):
    """Raised when an external integration fails."""
